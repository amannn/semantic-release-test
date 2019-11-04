module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          headerPattern: /^(\w*!?)(?:\(([\w\$\.\-\* ]*)\))?\: (.*)$/
        },
        releaseRules: [
          {type: 'fix', release: 'patch'},
          {type: 'feat', release: 'minor'},
          {type: 'fix!', release: 'major'},
          {type: 'feat!', release: 'major'}
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {changelogTitle: '# Changelog'}],
    ['@semantic-release/npm', {npmPublish: false}],
    ['@semantic-release/git', {message: 'Release ${nextRelease.version}'}]
  ]
};
