
module.exports = {
	tmp: {
		options: {
			create: [ '<%= dirnames.tmp %>' ]
		}
	},
	build: {
		options: {
			create: [ '<%= dirnames.latest_build %>',
								'<%= dirnames.latest_build %>/compiled files',
								'<%= dirnames.latest_build %>/web files',
								'<%= dirnames.latest_build %>/sample configs'
							]
		}
	}
};