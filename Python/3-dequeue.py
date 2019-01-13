from collections import deque

dict1 = {'name': 'first'}
dict2 = {'name': 'second'}
dict3 = {'name': 'third'}

dequeue = deque()

dequeue.append(dict1)
dequeue.append(dict2)
dequeue.appendleft(dict3)

print(dequeue.pop())
print(dequeue.popleft())
print(dequeue.popleft())
