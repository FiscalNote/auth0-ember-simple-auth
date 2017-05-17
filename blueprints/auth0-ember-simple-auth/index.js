module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'auth0-lock',             target: '~10.13.0'  },
      { name: 'jsrsasign',              target: '~4.8.3'  }
    ]);
  }
};
