var Node = require('./../model/node');
var parse = require('co-body')

exports.get = function *() {
	var node = yield Node.find(this.params.id)
	yield node.increment("rating", 1)
	return this.jsonResp(200,{node: node});
}

exports.getChildren = function *() {
	if(this.params.id=="null"){
		this.params.id=null
	}
	var children = yield Node.findAll({where:{parent: this.params.id}, order: 'rating DESC', limit: 20})
	return this.jsonResp(200,{children: children});
}

exports.post = function *() {
	var params = yield parse(this)
	console.log(params)

	yield Node.create({
      text: params.text,
      parent: params.parent})
	//var node = yield Node.find(this.params.id)
	return this.jsonResp(200);
}