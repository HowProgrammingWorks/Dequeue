from queue import Queue

obj1 = { 'name': 'first' }
obj2 = { 'name': 'second' }
obj3 = { 'name': 'third' }

queue = Queue()

queue.put(obj1)
queue.put(obj2)
queue.put(obj3)

print(queue.get())
print(queue.get())
print(queue.get())