const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-validate",
            bufferutil: "commonjs butterutil"
        });
        return config;
    },
    images: {
        domains: [
            "uploadthing.com"
        ]
    }
}

module.exports = nextConfig