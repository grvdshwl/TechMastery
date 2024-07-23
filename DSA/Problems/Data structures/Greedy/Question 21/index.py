# Car Pooling

def car_pooling(trips, capacity):
    trips.sort(key=lambda x: x[1])
    trip_log = []

    for trip in trips:
        passengers, pick_up, drop = trip

        for t in trip_log[:]:
            if t[0] <= pick_up:
                capacity += t[1]
                trip_log.remove(t)

        if capacity < passengers:
            return False

        capacity -= passengers
        trip_log.append([drop, passengers])

    return True


trips = [
    [2, 1, 5],
    [3, 3, 7],
]
capacity = 4

result = car_pooling(trips, capacity)
print(result)
