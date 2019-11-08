module.exports = {
  preset: 'conventionalcommits',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {changelogTitle: '# Changelog'}],
    ['@semantic-release/npm', {npmPublish: false}],
    ['@semantic-release/git', {message: 'Release ${nextRelease.version}'}]
  ]
};
