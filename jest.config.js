module.exports = {
    "roots": [
        "<rootDir>/app"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/setupEnzyme.ts"]
};
