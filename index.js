const arr = ["Tokyo", "London", "Rome", "Donlon", "Kyoto", "Paris", "Lonnod"]

const algorithmAnogrammGroup = (arr) => {
	const newArray = []
	const resultArray = new Map()
	const indexOfAll = (word) => {
		const indices = []
		let idx = newArray.indexOf(word)
		while (idx != -1) {
			indices.push(idx)
			idx = newArray.indexOf(word, idx + 1)
		}

		const groupArray = []

		indices.forEach((item) => {
			groupArray.push(arr[item])
		})

		resultArray.set(word, groupArray)
	}
	arr.forEach((item) => {
		const sorted = item.toLowerCase().split("").sort().join("")

		newArray.push(sorted)
	})
	newArray.forEach((sortedItem) => {
		indexOfAll(sortedItem)
	})

	console.log(Array.from(resultArray.values()))

	return Array.from(resultArray.values())
}
algorithmAnogrammGroup(arr)
