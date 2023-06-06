module.exports = (phase, { defaultConfig }) => {
    const nextConfig = {
        sassOptions: {
            includePaths: ["./src", "./styles"],
            prependData: `@import "./styles/variables.scss";`,
        },

        poweredByHeader: false,

        devIndicators: {
            buildActivity: false,
        },
    };

    return nextConfig;
};