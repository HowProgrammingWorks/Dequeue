from queue import LifoQueue

obj1 = { 'name': 'first' }
obj2 = { 'name': 'second' }
obj3 = { 'name': 'third' }

stack = LifoQueue()

stack.put(obj1)
stack.put(obj2)
stack.put(obj3)

print(stack.get())
print(stack.get())
print(stack.get())