/**
 * Key Components of an OS (Beyond the Kernel):
 * --------------------------------------------
 * The OS includes various parts that work together to manage hardware and software. While the
 * kernel is the core, these additional components make the OS practical and user-friendly.
 *
 * 1. **Shell:**
 *    - Acts as the user’s gateway to the OS.
 *    - Translates user commands (e.g., open a file, run a program) into instructions for the
 *      kernel.
 *    - Types:
 *      - **Command-line Shell**: Text-based (e.g., Bash, PowerShell).
 *      - **Graphical User Interface (GUI)**: Visual (e.g., Windows Explorer, macOS Finder).
 *
 * 2. **File System:**
 *    - Organizes and manages data storage on devices.
 *    - Examples: NTFS, FAT32, ext4, APFS.
 *    - Key Roles:
 *      - Tracks file locations.
 *      - Controls access with permissions.
 *
 * 3. **Process Management:**
 *    - Manages running programs by creating, scheduling, and terminating them.
 *    - Ensures fair CPU time allocation and smooth multitasking.
 *
 * 4. **Memory Management:**
 *    - Allocates and monitors memory (RAM) usage by programs.
 *    - Prevents one program from accessing another’s memory.
 *    - Uses techniques like virtual memory to expand available space.
 *
 * 5. **Device Drivers:**
 *    - Software that helps the OS communicate with hardware (e.g., printers, keyboards).
 *    - Acts as a translator between hardware and the kernel.
 *
 * 6. **Networking:**
 *    - Manages connections between devices and the internet.
 *    - Handles tasks like sending/receiving data and managing IP addresses.
 *
 * 7. **User Interface (UI):**
 *    - The part of the OS users interact with directly.
 *    - Types:
 *      - **GUI**: Includes windows, buttons, icons.
 *      - **CLI**: Text-based interface for typing commands.
 *
 * 8. **System Utilities:**
 *    - Tools that help maintain and optimize the system.
 *    - Examples:
 *      - File managers (e.g., Windows Explorer).
 *      - Task managers (e.g., Activity Monitor).
 *      - Disk tools (e.g., Cleanup, Defragmentation).
 *
 * 9. **Security and Access Control:**
 *    - Protects against unauthorized access and malware.
 *    - Uses passwords, biometrics, and permissions to enforce rules.
 *
 * 10. **System Services (Daemons):**
 *     - Background programs for essential tasks like:
 *       - Scheduling jobs (`cron`).
 *       - Running updates.
 *       - Managing web servers (`httpd`).
 *
 * 11. **Bootloader:**
 *     - Starts the OS when the computer is powered on.
 *     - Loads the kernel and initializes system components.
 *     - Examples: GRUB (Linux), Windows Boot Manager.
 *
 * Practical Analogy:
 * ------------------
 * Think of the OS as a city:
 * - **Shell**: The city hall, where people (users) make requests to the mayor (kernel).
 * - **File System**: The city’s library, organizing and storing records.
 * - **Process Management**: The traffic system, ensuring smooth vehicle (program) flow.
 * - **Memory Management**: The housing authority, allocating resources to residents (apps).
 */
