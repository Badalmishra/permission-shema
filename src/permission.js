export const permission = {
  "Admin": {
    "dashboard": {
      "securityAlerts": "Allow",
      "tasks": "Allow",
      "usersAndDevices": "Allow",
      "accounts": "Allow",
      "resources": "Allow"
    }
  },
  "SecOps": {
    "dashboard": {
      "securityAlerts": "Allow",
      "tasks": "Block",
      "usersAndDevices": "Allow",
      "accounts": "Block",
      "resources": "Allow"
    }
  },
  "AccountAdmins": {
    "dashboard": {
      "securityAlerts": "Block",
      "tasks": "Allow",
      "usersAndDevices": "Allow",
      "accounts": "Allow",
      "resources": "Allow"
    }
  }
}