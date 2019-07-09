const Test = require('../models/test')

module.exports = {
    index: async (req, res) => {
        const tests = await Test.find({})
        res.status(200).json(tests)
    },

    new: async (req, res) => {
        const newTest = new Test(req.value.body)
        const test = await newTest.save()
        res.status(201).json(test)
    },

    get: async (req, res) => {
        const { testId } = req.value.params
        const test = await Test.findById(testId)
        res.status(200).json(test)
    },

    replace: async (req, res) => {
        const { testId } = req.value.params
        const newTest = req.value.body
        await Test.findByIdAndUpdate(testId, newTest)
        res.status(200).json({ success: true })
    },

    update: async (req, res) => {
        const { testId } = req.value.params
        const newTest = req.value.body
        await Test.findByIdAndUpdate(testId, newTest)
        res.status(200).json({ success: true })
    },

}