 'use strict'

 const Sequelize = require('sequelize');
 const db = new Sequelize('sequalize1', 'postgres', 'mynameisreisa',{
 	host: 'localhost',
 	dialect: 'postgres'
 });
 const express = require ('express')
 const app = express ()


app.get('/hats', (req, res)=>{
	console.log('Opened home page')
	Hat.findAll().then( hatarray =>{
 		console.log( hatarray )
 		res.send( hatarray )
	})
})



 let Hat = db.define('hat',{
 	name: Sequelize.STRING,
 	material: Sequelize.STRING,
 	height: Sequelize.INTEGER,
    brim: Sequelize.BOOLEAN
 });

 db.sync({force: true}).then( ()=> {
 	console.log('sync succesfully')

 	Promise.all ([ Hat.create({
	 	name: 'Fitted Cap',
	 	material: 'Cotton',
	 	height: '1',
	    brim: true
		})
		.then ( hat =>{
		console.log('created hat')
		// console.log(hat)
		}), 
		Hat.create({
	 	name: 'Fitted Cap 2',
	 	material: 'Leather',
	 	height: '1',
	    brim: true
		})
		.then ( hat =>{
		console.log('created hat')
		// console.log(hat)
		})
	])
 	// .then( hats => {
 	// 	console.log("hats made!")
 	// 	Hat.findAll().then( hatarray =>{
 	// 	console.log( hatarray )
 	// 	})
 	// })
 })

 app.listen (8000, () => {
	console.log('server is running')
})




