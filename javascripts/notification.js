const notificationContainer = document.getElementById("notification-container")

const appendNotificationDiv = (message) => {
  let noteDiv = document.createElement('p');
  noteDiv.id = "notification"
  noteDiv.innerText = message
  notificationContainer.append(noteDiv)
}

const addNotification = (message) => {
  appendNotificationDiv(message)
  let notificationArea = document.getElementById("notification")
  setTimeout(() => {
    removeNotification(notificationArea)
  }, 4000)
}

const removeNotification = (notification) => {
  notification.outerHTML = ""
}

const onCloseNotifications = (err, custData) => {
  if (err !== null) {
   addNotification("An error occurred getting your prequalification data.")
   return;
  }
  provideCloseNotification(custData.state)
}

const provideCloseNotification = (qualState) => {
  switch (qualState) {
   case 'PREQUALIFIED':
     addNotification("You are prequalified for financing.")
     break;
   case 'PARTIALLY_PREQUALIFIED':
     addNotification("You are partially prequalified for financing.")
     break;
   case 'NOT_PREQUALIFIED':
     addNotification("Sorry, you did not prequalify for financing.")
     break;
  }
}

const notifyCompletedStatus = (err, tx_token) => {
  if (err) {
    addNotification("There was an error: " + err);
  } else if (tx_token !== undefined) {
    addNotification("Success! Checkout complete.")
  }
}
