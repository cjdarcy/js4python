class Animal:

    def __init__(self,name):
        self._name = name

    def speak(self):
        print("Generic Animals are mute")

    def get_name(self):
        return "My name is {}".format(self._name)

    name = property(get_name)


class Dog(Animal):
    def __init__(self,name):
        Animal.__init__(self,name) # super.__init__(name) in Python 3
        self.numLegs = 4


    def speak(self):
        print("woof woof")

class CartoonDog(Dog):

    def speak(self):
        print("I'll have a dry martini.")

spot = Dog("spot")
print(spot.name)
spot.speak()

brian = CartoonDog("Brian")
brian.speak()
print(brian.name)
