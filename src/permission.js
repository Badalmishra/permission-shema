export const permission = {
  Admin: {
    dashboard: {
      securityAlerts: "Allow",
      tasks: "Allow",
      accounts: "Allow",
      resources: "Allow",
      show: "Allow"
    },
    user: { list: "Allow", activate: "Allow" },
    device: { list: "Allow", activate: "Allow" },
    role: {
      manage: "Allow",
      list: "Block",
      details: "Block",
      admin: { list: "Block", update: "Block" },
      signin: "Block",
      request: "Block"
    },
    account: {
      list: "Block",
      details: "Block",
      edit: "Block",
      create: "Block",
      rescan: "Block",
      delete: "Block",
      admins: { list: "Block", update: "Block" }
    },
    target: {
      admin: { list: "Block", update: "Block" },
      manage: "Block",
      list: "Block",
      details: "Block",
      ssh: "Block",
      request: "Block"
    },
    approval: {
      list: "Block",
      details: "Block",
      delete: "Block",
      resource: { list: "Block", approve: "Block", reject: "Block" }
    }
  },
  SecOps: {
    dashboard: {
      securityAlerts: "Allow",
      tasks: "Block",
      accounts: "Block",
      resources: "Allow",
      show: "Allow"
    },
    user: { list: "RdOwner", activate: "WrOwner" },
    device: { list: "RdOwner", activate: "WrOwner" },
    role: {
      manage: "WrOwner",
      list: "Block",
      details: "Block",
      admin: { list: "Block", update: "Block" },
      signin: "Block",
      request: "Block"
    },
    account: {
      list: "Block",
      details: "Block",
      edit: "Block",
      create: "Block",
      rescan: "Block",
      delete: "Block",
      admins: { list: "Block", update: "Block" }
    },
    target: {
      admin: { list: "Block", update: "Block" },
      manage: "Block",
      list: "Block",
      details: "Block",
      ssh: "Block",
      request: "Block"
    },
    approval: {
      list: "Block",
      details: "Block",
      delete: "Block",
      resource: { list: "Block", approve: "Block", reject: "Block" }
    }
  },
  AccountAdmins: {
    dashboard: {
      securityAlerts: "Block",
      tasks: "Allow",
      accounts: "Allow",
      resources: "Allow",
      show: "Allow"
    },
    user: { list: "RdOwner", activate: "WrOwner" },
    device: { list: "RdOwner", activate: "WrOwner" },
    role: {
      manage: "WrOwner",
      list: "Block",
      details: "Block",
      admin: { list: "Block", update: "Block" },
      signin: "Block",
      request: "Block"
    },
    account: {
      list: "Block",
      details: "Block",
      edit: "Block",
      create: "Block",
      rescan: "Block",
      delete: "Block",
      admins: { list: "Block", update: "Block" }
    },
    target: {
      admin: { list: "Block", update: "Block" },
      manage: "Block",
      list: "Block",
      details: "Block",
      ssh: "Block",
      request: "Block"
    },
    approval: {
      list: "Block",
      details: "Block",
      delete: "Block",
      resource: { list: "Block", approve: "Block", reject: "Block" }
    }
  },
  user: {
    dashboard: {
      securityAlerts: "Block",
      tasks: "Block",
      accounts: "Block",
      resources: "Block",
      show: "Block"
    },
    user: { list: "Block", activate: "WrOwner" },
    device: { list: "WrOwner", activate: "WrOwner" },
    role: {
      manage: "Block",
      list: "Block",
      details: "Block",
      admin: { list: "Block", update: "Block" },
      signin: "Block",
      request: "Block"
    },
    account: {
      list: "Block",
      details: "Block",
      edit: "Block",
      create: "Block",
      rescan: "Block",
      delete: "Block",
      admins: { list: "Block", update: "Block" }
    },
    target: {
      admin: { list: "Block", update: "Block" },
      manage: "Block",
      list: "Block",
      details: "Block",
      ssh: "Block",
      request: "Block"
    },
    approval: {
      list: "Block",
      details: "Block",
      delete: "Block",
      resource: { list: "Block", approve: "Block", reject: "Block" }
    }
  }
};
