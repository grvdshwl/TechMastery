// ================================================
// 🧠 WHAT IS DOCKER NETWORKING (SIMPLE EXPLANATION)
// ================================================

// Think of Docker containers like small apps or computers.
// To:
// 🗣️ Talk to each other
// 🌐 Access the internet
// 🖥️ Be reachable by users or systems
// ...they need networking — Docker provides this with several modes.

// ================================================
// 🧩 DOCKER NETWORKING MODES — WITH REAL-LIFE PARALLELS
// ================================================

// ================================================
// 1. BRIDGE NETWORK
// ================================================
// 🛣️ Like private roads in a gated community
// 🎯 Best for: Connecting containers on the **same machine**

/*
✅ What happens:
- Each container gets a private IP.
- Can talk to each other by name.
- Can access the internet.

🧪 Example:
docker network create mynet
docker run -dit --name db --network mynet redis
docker run -dit --name app --network mynet my-web-app

→ App can say: "Hey db, give me data!"
*/

//
// 🟢 Use bridge when:
// - All containers are on one computer
// - You need safe, isolated, private communication
//

// ================================================
// 2. HOST NETWORK
// ================================================
// 🏠 Like roommates sharing one apartment (same network interface)
// 🎯 Best for: High performance, system-level access

/*
✅ What happens:
- No separate IP — container uses host’s ports directly.
- Fastest, but less isolated.

🧪 Example:
docker run --rm --network host nginx

→ Now nginx is available on your host at localhost:80
*/

//
// 🟢 Use host when:
// - You need speed (no network translation)
// - Running things like Prometheus, Grafana, routers, etc.
//

// ================================================
// 3. NONE NETWORK
// ================================================
// 🚫 Like locking a container in a box — no network access
// 🎯 Best for: Offline testing, high security

/*
✅ What happens:
- Container has no network access at all.

🧪 Example:
docker run -dit --network none alpine
*/

//
// 🟢 Use none when:
// - You don’t need any network at all
// - Testing behavior offline
// - You want complete isolation
//

// ================================================
// 4. OVERLAY NETWORK
// ================================================
// 🌉 Like connecting multiple cities with a bridge
// 🎯 Best for: Multi-host apps (e.g., microservices)

// ✅ Requires Docker Swarm

/*
✅ What happens:
- Works across machines.
- Lets containers talk even if they're on different servers.

🧪 Example:
docker network create --driver overlay mynet
*/

//
// 🟢 Use overlay when:
// - Using Docker Swarm or Kubernetes
// - Spanning containers across servers
//

// ================================================
// 5. MACVLAN NETWORK
// ================================================
// 📡 Like giving containers their own Wi-Fi & LAN identity
// 🎯 Best for: When containers must be directly reachable on your network

/*
✅ What happens:
- Each container gets its own IP on your physical network.
- Other devices (like printers) can talk to the container.

🧪 Example:
docker network create -d macvlan \
  --subnet=192.168.1.0/24 \
  --gateway=192.168.1.1 \
  -o parent=eth0 macnet
*/

//
// 🟢 Use macvlan when:
// - You need each container to be a full-fledged networked device
// - For special enterprise/local LAN setups
//

// ================================================
// 📊 COMPARISON TABLE (QUICK LOOK)
// ================================================

/*
| Network | Internet | Talk to Containers | Own IP? | Best Use                            |
| ------- | -------- | ------------------ | ------- | ----------------------------------- |
| bridge  | ✅       | ✅ (same host)      | ✅      | Simple apps on one machine          |
| host    | ✅       | ✅ (shares host)    | ❌      | Speed or low-level network apps     |
| none    | ❌       | ❌                 | ❌      | Fully isolated testing              |
| overlay | ✅       | ✅ (multi-host)     | ✅      | Clustered apps (Swarm/K8s)          |
| macvlan | ✅       | ✅ (real LAN)       | ✅      | LAN-access, advanced enterprise use |
*/

// ================================================
// 🛠️ WHICH NETWORK SHOULD YOU USE?
// ================================================

//
// ✅ Use bridge:
// - Most common and default
// - For simple local container-to-container communication
//
// ✅ Use host:
// - When you need raw speed or system-level monitoring tools
//
// ✅ Use none:
// - For isolation or security-focused testing
//
// ✅ Use overlay:
// - For microservices across machines / clustered setups
//
// ✅ Use macvlan:
// - When containers must behave like physical devices on your LAN
//
