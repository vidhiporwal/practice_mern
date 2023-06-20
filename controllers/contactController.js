const asyncHandler = require("express-async-handler");

  
  //@desc get all contacts
  //@route get /api/contacts
  //@access public

  const getContacts= asyncHandler(async(req,res) => {
    res.status(200).json({message: "get all contacts"})
  })

  //@desc get all contacts
  //@route get /api/contacts
  //@access public

  const getContact= asyncHandler(async(req,res) => {
    res.status(200).json({message: `get contacts ${req.params.id}`})
  })
  //@desc create all contacts
  //@route get /api/contacts
  //@access public

  const createContact= asyncHandler(async(req,res) => {
    res.status(201).json({message: "create all contacts"})
  })
  //@desc create all contacts
  //@route get /api/contacts
  //@access public

  const updateContact=asyncHandler(async (req,res) => {
    res.status(201).json({message: `update contact of ${req.params.id}` })
  })
   //@desc create all contacts
  //@route get /api/contacts
  //@access public

  const deleteContact= asyncHandler(async(req,res) => {
    res.status(201).json({message: `delete contact of ${req.params.id}` })
  })

  

  module.exports= {getContact,createContact,getContacts,updateContact,deleteContact}