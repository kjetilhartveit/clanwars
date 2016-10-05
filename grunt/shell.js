
module.exports = {
	gitcheckout: {
		command: (filesToCheckout, destDir) => 'git --work-tree=' + destDir + ' --git-dir=.git checkout master -f -- ' + filesToCheckout
	}
};
