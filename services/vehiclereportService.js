'use strict';

var config = require('../config');
var Util = require('../util');
var UrlService = require('./urlService');

var VehiclereportService = function(that) {
    this.util = new Util(that);
    this.urlService = new UrlService(that);
};

VehiclereportService.prototype.generatereportvehicle = function(token) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    
    var urlservice = this.urlService.getFullUrlPrincipalApi('');

    var url = '//veiculo/relatorio?fileName=relatorioveiculos';

    var header = this.util.getDefaultHeader2(token);

    //var resposta = this.util.getUrl(urlservice, header, url);

    return this.util.getUrl(urlservice, header, url);
}

module.exports = VehiclereportService
