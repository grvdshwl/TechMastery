def arrange_seats(reserved_seats, n):
    seat_map = {}

    for row, col in reserved_seats:
        cols = seat_map.get(row, set())
        cols.add(col)
        seat_map[row] = cols

    result = (n - len(seat_map)) * 2

    for cols in seat_map.values():
        isFirstFree = not any(col in cols for col in range(2, 6))
        isLastFree = not any(col in cols for col in range(6, 10))
        isMidFree = not any(col in cols for col in range(4, 8))

        result += max(isFirstFree + isLastFree, isMidFree)

    return result

# Example usage:
reserved_seats = [[1, 2], [1, 3], [2, 4], [3, 5]]
n = 3
print(arrange_seats(reserved_seats, n))
