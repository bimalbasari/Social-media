const fs = require("fs");
const User = require("../models/user.model");
const Event = require("../models/event.model")

const postEvent = async (req, res) => {

  try {
    let img = fs.readFileSync(req.file.path);
    console.log(req.file.path)
    // let encode_image = img.toString("base64");
    const { content } = req.body;
    const userID = req.userId;

    const newEvent = new Event({
      postBy: userID,
      content,
      picture: img
    })
    await newEvent.save();
    res.status(200).json({ message: "Posted" })
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating the event.' })
  }
}



const fetchEvent = async (req, res) => {
  try {
    const events = await Event.find()
      .populate({
        path: 'postBy',
        select: 'firstName lastName picture'
      })
      .populate({
        path: 'likes.user',
        select: 'firstName lastName picture'
      })
      .populate({
        path: 'comments.user',
        select: 'firstName lastName picture'
      }).exec();

    res.status(200).json({
      posts: events
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while fetch flatMate.' });
  }
}



// const fetchEvent = async (req, res) => {
//   try {
//     const events = await Event.find()
//       .populate({
//         path: 'postBy',
//         select: 'firstName lastName picture',
//       })
//       .select('postBy content picture likes comments')
//       .exec();

//     // Convert picture to base64 for postBy
//     // events.forEach((event) => {
//     //   if (event.postBy.picture) {

//     //     console.log(typeof (event.postBy.picture.image))
//     //     const imageBuffer = Buffer.from(JSON.stringify(event.postBy.picture.image), 'base64');
//     //     console.log(typeof (imageBuffer))
//     //     return event.postBy.picture = imageBuffer;

//     //   }
//     // });


//     const imageBuffer = Buffer.from(events[0].postBy.picture.image, 'base64');
//     events[0].postBy.picture = imageBuffer;

//     // events.map((event) => {
//     //   if (event.postBy.picture) {
//     //     const imageBuffer = Buffer.from(event.postBy.picture.image, 'base64');
//     //    event.postBy.picture = imageBuffer
//     //   }
//     // });
//  console.log("hello"  )


//     //     // Convert picture to base64 for comments' user

//     //     // events.forEach((event) => {
//     //     //   event.comments.forEach((comment) => {
//     //     //     if (comment.user.picture) {
//     //     //       const buffer = Buffer.from(comment.user.picture.image, 'base64');
//     //     //       comment.user.picture = buffer;
//     //     //     }
//     //     //   });
//     //     // });

//     res.status(200).send(events);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'An error occurred while fetching events.' });
//   }
// };





// Function to find an event and add a comment

const addCommentToEvent = async (req, res) => {
  const { postId, comment } = req.body;
  try {
    // Find the event by its ID
    const event = await Event.findById({ _id: postId });

    // Create a new comment
    const newComment = {
      user: req.userId,
      message: comment,
    };

    // Add the comment to the event's comments array
    event.comments.push(newComment);

    // Save the updated event
    await event.save();

    res.status(200).json({ message: 'Comment added to event successfully' });

  } catch (error) {
    console.error('Error adding comment to event:', error.message);
  }
}


// Function to find the user details for the comment in an event

const getCommentUserDetails = async (req, res) => {
  try {
    const { postId } = req.params;

    // Find the event by its ID and populate the likes field with user details
    const event = await Event.findById(postId).populate({
      path: 'comments.user',
      select: '_id firstName lastName picture'
    }).select('comments').exec();

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Extract the user details from the likes field
    const likesUserDetails = event.comments.map((comment) => {
      const { _id, firstName, lastName, picture, } = comment.user;
      // Convert base64 string back to buffer
      const image = Buffer.from(picture.image, 'base64');
      return { userId: _id, username: `${firstName} ${lastName}`, picture: image, };
    });

    res.status(200).json(likesUserDetails);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

// like controller


const addLikeToEvent = async (req, res) => {
  const { postId } = req.body;
  try {
    // Find the event by its ID
    const event = await Event.findById({ _id: postId });

    // Create a new comment
    const adddLike = {
      user: req.userId,
    };

    // Add the comment to the event's comments array
    event.likes.push(adddLike);

    // Save the updated event
    await event.save();

    res.status(200).json(event.likes);

  } catch (error) {
    console.error('Error adding comment to event:', error.message);
  }
}
const getLikesUserDetails = async (req, res) => {
  try {
    const { postId } = req.params;

    // Find the event by its ID and populate the likes field with user details
    const event = await Event.findById(postId).populate({
      path: 'likes.user',
      select: '_id firstName lastName picture'
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Extract the user details from the likes field
    const likesUserDetails = event.likes.map((like) => {
      const { _id, firstName, lastName, picture } = like.user;
      // Convert base64 string back to buffer
      const image = Buffer.from(picture.image, 'base64');
      return { userId: _id, username: `${firstName} ${lastName}`, picture: image };
    });

    res.status(200).json(likesUserDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  postEvent,
  addCommentToEvent,
  getCommentUserDetails,
  addLikeToEvent,
  getLikesUserDetails,
  fetchEvent,
}


// {
//     $project: {
//         _id: 1, // Include the _id field
//         firstName: 1, // Include the name field
//         lastName: 1, // Include the lastname field
//         picture: 1,// Include the picture field
//         content: 1,
//         picture:1
//     }
// }, 