module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: "re_Lb4UHrA5_5CYxUo9AfgytFUUQvDYEV76L", // Required
      },
      settings: {
        defaultFrom: "cci.org.bd@gmail.com",
        defaultReplyTo: "cci.org.bd@gmail.com",
      },
    },
  },
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
