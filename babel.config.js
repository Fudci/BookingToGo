module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', 'jsx', 'tsx'],
        alias: {
          '@templates': './src/Templates',
          '@atom': './src/Atom',
          '@assets': './src/Assets',
          '@helpers': './src/Helpers',
          '@molecules': './src/Molecules',
          '@navigators': './src/Navigators',
          '@organisms': './src/Organisms',
        },
      },
    ],
  ],
};
