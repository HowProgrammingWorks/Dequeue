from queue import LifoQueue

dict1 = {'name': 'first'}
dict2 = {'name': 'second'}
dict3 = {'name': 'third'}

stack = LifoQueue()

stack.put(dict1)
stack.put(dict2)
stack.put(dict3)

print(stack.get())
print(stack.get())
print(stack.get())
