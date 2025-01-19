/*
Testing
Automated testing is considered an essential part of any serious software development effort.
Automation makes it easy to repeat individual tests or test suites quickly and easily during development.
This helps ensure that releases meet quality and performance goals. Automation helps increase coverage and provides
a faster feedback loop to developers. Automation both increases the productivity of individual developers and ensures that
tests are run at critical development lifecycle junctures, such as source code control check-in, feature integration, and
version release.

Such tests often span a variety of types, including unit tests, end-to-end (e2e) tests, integration tests, and so on.
While the benefits are unquestionable, it can be tedious to set them up. Nest strives to promote development best practices,
including effective testing, so it includes features such as the following to help developers and teams build and automate tests. Nest:

- automatically scaffolds default unit tests for components and e2e tests for applications
- provides default tooling (such as a test runner that builds an isolated module/application loader)
- provides integration with Jest and Supertest out-of-the-box, while remaining agnostic to testing tools
- makes the Nest dependency injection system available in the testing environment for easily mocking components

As mentioned, you can use any testing framework that you like, as Nest doesn't force any specific tooling.
Simply replace the elements needed (such as the test runner), and you will still enjoy the benefits of Nest's ready-made testing facilities.

Installation
To get started, first install the required package:

$ npm i --save-dev @nestjs/testing

Unit testing
In the following example, we test two classes: CatsController and CatsService.
As mentioned, Jest is provided as the default testing framework.
It serves as a test-runner and also provides assert functions and test-double utilities that help with mocking, spying, etc.
In the following basic test, we manually instantiate these classes, and ensure that the controller and service fulfill their API contract.

cats.controller.spec.tsJS

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});

Hint:
Keep your test files located near the classes they test. Testing files should have a .spec or .test suffix.

Because the above sample is trivial, we aren't really testing anything Nest-specific.
Indeed, we aren't even using dependency injection (notice that we pass an instance of CatsService to our catsController).
This form of testing - where we manually instantiate the classes being tested - is often called isolated testing as it is independent from the framework.
Let's introduce some more advanced capabilities that help you test applications that make more extensive use of Nest features.

Testing utilities
The @nestjs/testing package provides a set of utilities that enable a more robust testing process.
Let's rewrite the previous example using the built-in Test class:

cats.controller.spec.tsJS

import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [CatsController],
        providers: [CatsService],
      }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});

The Test class is useful for providing an application execution context that essentially mocks the full Nest runtime,
but gives you hooks that make it easy to manage class instances, including mocking and overriding.
The Test class has a createTestingModule() method that takes a module metadata object as its argument (the same object
you pass to the @Module() decorator). This method returns a TestingModule instance which in turn provides a few methods.
For unit tests, the important one is the compile() method.
This method bootstraps a module with its dependencies (similar to the way an application is bootstrapped in the conventional main.ts file using NestFactory.create()), and returns a module that is ready for testing.

Hint:
The compile() method is asynchronous and therefore has to be awaited. Once the module is compiled you can retrieve any static
instance it declares (controllers and providers) using the get() method.
TestingModule inherits from the module reference class, and therefore its ability to dynamically resolve scoped providers
(transient or request-scoped). Do this with the resolve() method (the get() method can only retrieve static instances).

const moduleRef = await Test.createTestingModule({
  controllers: [CatsController],
  providers: [CatsService],
}).compile();

catsService = await moduleRef.resolve(CatsService);
Warning:
The resolve() method returns a unique instance of the provider, from its own DI container sub-tree.
Each sub-tree has a unique context identifier. Thus, if you call this method more than once and compare instance references,
you will see that they are not equal.
Hint:
Learn more about the module reference features here.
Instead of using the production version of any provider, you can override it with a custom provider for testing purposes.
For example, you can mock a database service instead of connecting to a live database. We'll cover overrides in the next section,
but they're available for unit tests as well.

Auto mocking
Nest also allows you to define a mock factory to apply to all of your missing dependencies.
This is useful for cases where you have a large number of dependencies in a class and mocking all of them will take a long time and a lot of setup.
To make use of this feature, the createTestingModule() will need to be chained up with the useMocker() method, passing a factory for your dependency mocks.
This factory can take in an optional token, which is an instance token, any token which is valid for a Nest provider,
and returns a mock implementation. The below is an example of creating a generic mocker using jest-mock and a specific mock for CatsService using jest.fn().

import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
    })
    .useMocker((token) => {
      const results = ['test1', 'test2'];
      if (token === CatsService) {
        return { findAll: jest.fn().mockResolvedValue(results) };
      }
      if (typeof token === 'function') {
        const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
        const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        return new Mock();
      }
    })
    .compile();
    
    controller = moduleRef.get(CatsController);
  });
});

You can also retrieve these mocks out of the testing container as you normally would custom providers, moduleRef.get(CatsService).

Hint:
A general mock factory, like createMock from @golevelup/ts-jest can also be passed directly.
Hint:
REQUEST and INQUIRER providers cannot be auto-mocked because they're already pre-defined in the context.
However, they can be overwritten using the custom provider syntax or by utilizing the .overrideProvider method.

End-to-end testing
Unlike unit testing, which focuses on individual modules and classes, end-to-end (e2e) testing covers the interaction of classes and modules at a more aggregate level --
closer to the kind of interaction that end-users will have with the production system.
As an application grows, it becomes hard to manually test the end-to-end behavior of each API endpoint.
Automated end-to-end tests help us ensure that the overall behavior of the system is correct and meets project requirements.
To perform e2e tests we use a similar configuration to the one we just covered in unit testing. In addition, Nest makes it easy to use the Supertest library to simulate HTTP requests.

cats.e2e-spec.tsJS

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module';
import { CatsService } from '../../src/cats/cats.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect({
        data: catsService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
*/
