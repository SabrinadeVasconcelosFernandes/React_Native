const moment = require('moment')

module.exports = app => {
   const getTasks = (req, res) => {
      const date = req.query.date ? req.query.date 
         :moment().endOf('day').toDate()

      app.db('tasks')
         .where({userId: req.user.id})
         .where('estimateAlt', '<=', date)  
         .orderBy('estimateAlt') 
         .then(tasks => res.json(tasks))
         .catch(err => res.status(500).json(err))
   }
   const save = (req, res) => {
      if(!req.body.desc.trim()){
         return res.status(400).send('descrição é um campo obrigatório')
      }
      req.body.userId = req.user.id

      app.db('tasks')    
         .insert(req.body)
         .then(_ => res.status(204).send())
         .catch(err => res.status(400).json(err))
   }

   const remove = (req, res) => {
      app.db('tasks')
         .where({id:req.params.id, userId: req.user.id})
         .del()
         .then(rowsDeleted => {
            if(rowsDeleted > 0){
               res.status(204).send()
            }
            else{
               const msg = `Não foi encontrada task com id ${req.params.id}`
               res.status(400).send(msg)
            }
         })
         .catch(err => res.status(400).json(err))
   }
//const doneAlt = task.doneAlt ? null : new Date() updateTaskDoneAlt(req, res, doneAlt)

   const updateTaskDoneAlt = (req, res, doneAlt) =>{
      app.db('tasks')
         .where({id: req.params.id, userId: req.user.id})
         .update({doneAlt})
         .then(_=> res.status(204).send())
         .catch(err => res.status(400).json(err))
   }

   const toggleTask = (req, res) => {
      app.db('tasks')
          .where({ id: req.params.id, userId: req.user.id })
          .first()
          .then(task => {
              if (!task) {
                  const msg = `Task com id ${req.params.id} não encontrada.`
                  return res.status(400).send(msg)
              }

              const doneAlt = task.doneAlt ? null : new Date()
              updateTaskDoneAlt(req, res, doneAlt)
          })
          .catch(err => res.status(400).json(err))
  }

  return { getTasks, save, remove, toggleTask }
}