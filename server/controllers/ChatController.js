

const flatMateChats = (req, res) => {

    req.userId

}
const flatMateSingalChat = (req, res) => {

    req.userId

    const singalChat = Chat.find((c) => c._id === req.paraam.id)

}

module.exports = {
    flatMateChats,
    flatMateSingalChat
}