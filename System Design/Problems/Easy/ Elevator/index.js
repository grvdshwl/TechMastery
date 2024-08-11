// Elevator System Design

//* https://medium.com/@neeraj_swe/low-level-design-of-an-elevator-system-e7fc018f356e
// Designing an elevator system involves a combination of hardware, software, and operational considerations.
// The goal is to create a system that efficiently transports passengers and goods between floors of a building.

// 1. Components of an Elevator System:

//    - Elevator Car: The cabin where passengers or goods are transported.
//    - Hoistway (Shaft): The vertical passage through which the elevator car moves.
//    - Counterweight: Balances the elevator car to reduce the load on the motor.
//    - Motor: Powers the movement of the elevator car.
//    - Control System: Manages the operation of the elevator, including speed, direction, and stopping.
//    - Doors: Automatic doors on the elevator car and each floor to allow safe entry and exit.
//    - Sensors: Detect the position of the elevator car, door status, and load weight.
//    - User Interface: Buttons inside the elevator car and on each floor for user input.

// 2. Types of Elevator Systems:

//    - Traction Elevators:
//      - Uses ropes and a counterweight to move the elevator car.
//      - Suitable for mid to high-rise buildings.
//      - Can be geared or gearless, with gearless being faster and more efficient.

//    - Hydraulic Elevators:
//      - Uses a hydraulic piston to move the elevator car.
//      - Suitable for low to mid-rise buildings.
//      - Generally slower and less efficient than traction elevators.

//    - Machine Room-Less (MRL) Elevators:
//      - Combines features of traction and hydraulic systems without requiring a separate machine room.
//      - Suitable for buildings with space constraints.

// 3. Operational Considerations:

//    - Capacity and Speed:
//      - Determined based on the building's height, number of floors, and expected traffic.
//      - Typical capacities range from a few hundred kilograms to several tons.
//      - Speed varies from 1 m/s for low-rise buildings to over 10 m/s for skyscrapers.

//    - Traffic Management:
//      - Algorithms determine how to efficiently dispatch elevators to minimize wait and travel times.
//      - Types of algorithms include single elevator control, group control, and destination control systems.

//    - Safety Features:
//      - Emergency brakes and backup power supply.
//      - Overload sensors to prevent operation when the elevator is over capacity.
//      - Fire and earthquake sensors to manage safe operation during emergencies.

// 4. User Experience:

//    - Accessibility:
//      - Elevators should be accessible to all users, including those with disabilities.
//      - Features include braille buttons, audible announcements, and low button placement.

//    - Aesthetics:
//      - Design of the elevator car interior, including lighting, materials, and finishes, to enhance user comfort.

// Summary:
// - Elevator system design involves hardware, software, and operational components.
// - Key components include the elevator car, hoistway, motor, control system, and user interface.
// - Types of systems include traction, hydraulic, and machine room-less elevators.
// - Operational considerations include capacity, speed, traffic management, and safety features.
// - The design should also consider user experience and accessibility.
