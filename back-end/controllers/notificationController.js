const { Notification, User } = require("../models");

// Function to create notification
async function CreateNotification(userId, notificationContent) {
  try {
    // Create notification in the Notification table
    const notification = await Notification.create({
      userId: userId,
      readStatus: 0, // Assuming false is represented by 0
      notificationContent: notificationContent,
    });

    // Return the created notification
    return notification;
  } catch (error) {
    // Handle errors
    console.error("Error creating notification:", error);
    throw new Error("Failed to create notification");
  }
}

module.exports = {
  CreateNotification,
};