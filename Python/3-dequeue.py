from collections import deque

obj1 = { 'name': 'first' }
obj2 = { 'name': 'second' }
obj3 = { 'name': 'third' }

dequeue = deque()

dequeue.append(obj1)
dequeue.append(obj2)
dequeue.appendleft(obj3)

print(dequeue.pop())
print(dequeue.popleft())
print(dequeue.popleft())