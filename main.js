
//created addBody function with a chassisObject parameter
const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create an empty object. No properties yet.
	const newChassisObject = {	}
	// stop the function and return the value from within the function
	//this will be used to pass down to the next function as a parameter
	return newChassisObject
}
//create addWheels function with newChassisObject
const addWheels = (newChassisObject) => {
    newChassisObject.wheels = 4
    return newChassisObject
}

const addEngine = (newChassisObject) => {
    newChassisObject.engine = "4.8L"
    return newChassisObject
}

const addSteeringWheel = (newChassisObject) => {
    newChassisObject.steeringwheel = "Tilting"
    return newChassisObject
}

const addDriveTrain = (newChassisObject) => {
    newChassisObject.driveTrain = "Two wheel drive"
    return newChassisObject
}
let chassis = createChassis()

chassis = addBody(chassis)
chassis = addWheels(chassis)
chassis = addEngine(chassis)
chassis = addSteeringWheel(chassis)
chassis = addDriveTrain(chassis)
console.log(chassis)
/*
	Note in the code below that the object that gets returned from the
	makeChassis() function above is stored in the chassis variable. That
	value is then sent to the addBody() function as that function's input.
*/
/*
let chassisWithBody = addBody(chassis)
let chassisWithWheels = addWheels(chassis)
console.log(chassisWithBody)
*/