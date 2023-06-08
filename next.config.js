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

        assetPrefix: "./",
        output: "export", // Cretes a static site
        distDir: "docs", // Outputs to /docs folder for github pages
    };

    return nextConfig;
};