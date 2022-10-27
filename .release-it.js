module.exports = {
  git: {
    tagName: "v${version}",
    commitMessage: "release: v${version}",
    requireCleanWorkingDir: false,
    requireBranch: "master",
  },
  hooks: {
    "before:init": ["git pull origin master", "npm run test"],
  },
  npm: {
    publish: false,
  },
  prompt: {
    ghRelease: false,
    glRelease: false,
    publish: false,
  },
}
