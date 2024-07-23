# Assign Cookie

def findContentChildren(g, s):
    g.sort()
    s.sort()

    i = 0
    j = 0

    contentChildren = 0

    while i < len(g) and j < len(s):
        if s[j] >= g[i]:
            contentChildren += 1
            i += 1
        j += 1

    return contentChildren

# Example usage:
g = [1, 2, 3]
s = [1, 1]
print(findContentChildren(g, s))  # Output: 1
