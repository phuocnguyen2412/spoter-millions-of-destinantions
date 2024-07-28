module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],

        plugins: [
            ["module:react-native-dotenv"],
            ["nativewind/babel"],
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
        ],
    };
};
