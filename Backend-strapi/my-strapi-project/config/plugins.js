module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name:"dgtljodhi",
          api_key:"339884794397961",
          api_secret: "ZdVCQZegGJKMrYxA-RWmnybYn2I",
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