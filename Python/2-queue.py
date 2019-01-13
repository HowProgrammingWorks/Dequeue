from queue import Queue

dict1 = {'name': 'first'}
dict2 = {'name': 'second'}
dict3 = {'name': 'third'}

queue = Queue()

queue.put(dict1)
queue.put(dict2)
queue.put(dict3)

print(queue.get())
print(queue.get())
print(queue.get())
