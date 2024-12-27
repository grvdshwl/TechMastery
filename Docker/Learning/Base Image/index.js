/**
 * Base Image / Parent Image:
 * ---------------------------
 * In Docker, an **image** is a blueprint for creating containers. A **Base Image** (also called
 * a **Parent Image**) is the starting point or foundation for building other Docker images.
 *
 * Key Concepts:
 * -------------
 * 1. **Base Image**:
 *    - The base image is the initial image that you use to build a new Docker image.
 *    - It contains the essential components needed for your application to run, such as an operating
 *      system or software dependencies.
 *    - For example, if you're building a web server, you might start with a base image that includes
 *      a Linux operating system and necessary libraries.
 *
 * 2. **Parent Image**:
 *    - A parent image is essentially the image that a new image is built on top of.
 *    - In Docker, each image is built on top of another image. If your Dockerfile doesn’t explicitly
 *      specify a base image, Docker will use an image called `scratch`, which is an empty base image
 *      with nothing in it.
 *    - Parent images can be thought of as the "previous layer" that the new image builds upon.
 *
 * Example:
 * --------
 * Imagine you're building a house. The **base image** is like the foundation of the house.
 * You start with a solid foundation (base image), and then you build up from there.
 * The **parent image** is the layer directly beneath the house that provides support for the structure.
 *
 * 3. **Common Base Images**:
 *    - Some common base images include:
 *      - `ubuntu`: A minimal version of the Ubuntu operating system.
 *      - `alpine`: A very small, lightweight Linux distribution.
 *      - `node`: An image containing Node.js for running JavaScript applications.
 *      - `python`: A base image that includes Python and related libraries.
 *
 * 4. **Building on Top of a Base Image**:
 *    - When you create your own Docker image, you typically start by choosing a base image and then
 *      add your application, files, or configurations on top of it.
 *    - The Dockerfile specifies the base image and what actions to take on it.
 *
 * Example Dockerfile:
 * -------------------
 * ```dockerfile
 * # Using Ubuntu as the base image
 * FROM ubuntu:20.04
 *
 * # Installing Nginx web server on top of the base image
 * RUN apt-get update && apt-get install -y nginx
 *
 * # Copying a custom configuration file into the container
 * COPY nginx.conf /etc/nginx/nginx.conf
 *
 * # Exposing the container's web port
 * EXPOSE 80
 *
 * # Starting Nginx when the container runs
 * CMD ["nginx", "-g", "daemon off;"]
 * ```
 * In this example:
 * - The base image is `ubuntu:20.04`, which is an Ubuntu Linux system.
 * - The Dockerfile adds the **Nginx web server** on top of it.
 *
 * 5. **Advantages of Using Base Images**:
 *    - **Reuse**: You don’t need to build everything from scratch. You can start with a solid foundation
 *      and build on top of it, saving time and effort.
 *    - **Standardization**: Using base images ensures consistency. Everyone using the same base image
 *      will have the same starting point, making it easier to work together.
 *    - **Security**: Official base images, like `ubuntu` or `alpine`, are maintained and updated, helping
 *      to ensure that your containers are secure and up to date.
 *
 * ***Practical Analogy:***
 * ------------------------
 * Think of a **base image** like a **cake mix**. It's a pre-made starting point (the flour, sugar, etc.)
 * that you can use to bake your cake. You can then add your **flavors, frosting, and decorations** (your
 * application's code and configurations) on top of it.
 *
 * Similarly, the **parent image** is like the original recipe from which your cake mix (base image) comes.
 */
