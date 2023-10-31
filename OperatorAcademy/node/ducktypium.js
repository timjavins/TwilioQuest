class Ducktypium {
    constructor(color) {
        if (color !== 'red' && color !== 'blue' && color !== 'yellow') {
            throw new Error('Invalid color');
        }
        this.color = color;
        this.calibrationSequence = [];
    }

    refract(color) {
        if (color !== 'red' && color !== 'blue' && color !== 'yellow') {
            throw new Error('Invalid color');
        }
        if (this.color === color) {
            return color;
        } else if ((this.color === 'red' && color === 'blue') || (this.color === 'blue' && color === 'red')) {
            return 'purple';
        } else if ((this.color === 'red' && color === 'yellow') || (this.color === 'yellow' && color === 'red')) {
            return 'orange';
        } else if ((this.color === 'yellow' && color === 'blue') || (this.color === 'blue' && color === 'yellow')) {
            return 'green';
        }
    }

    calibrate(numbers) {
        this.calibrationSequence = numbers.sort((a, b) => a - b).map(num => num * 3);
    }
}

/*
create a class called Ducktypium. The constructor should take a single string argument, a crystal color, and store that data in an instance variable named color. The color can only be red, blue, or yellow. The constructor should throw an error if the argument is any other string.

When the class is created, it should also define a property called calibrationSequence that is initally set to be an empty array.

The Ducktypium class must implement two instance methods: refract and calibrate. Each of these functions will be described below.

The refract method
One of the required methods describes the refractive properties of ducktypium when it is exposed to colored light.

The refract method must take a single string argument, which must be one of red, blue, or yellow. The method should throw an error if the argument is any other string, just like the constructor. This function should return a single string, which is the color produced by the combination of the instance's color property and the color passed in to the refract function.

If the instance's color property is the same as the argument passed in, return that value
If the combination of colors is different, it should return a string which is the combination of those two primary colors.
For reference, primary colors combine in the following ways:

red + blue = purple
red + yellow = orange
yellow + blue = green
The calibrate method
The other required method creates a calibration sequence required to stabilize a ducktypium crystal.

The calibrate method takes a single argument, an array of numbers. With this input array, you must do the following:

Sort the numbers from smallest to largest
Multiply each number in the array by 3
Assign the resulting array to the Ducktypium instance's calibrationSequence variable.
*/