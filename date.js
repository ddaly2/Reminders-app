
exports.getDate = getDate;

function getDate() {
     const today = new Date();
     const currentDay = today.getDay();
     
     let options = {
          weekday: "long",
          day: "numeric",
          month: "long"
     };
     
     return today.toLocaleDateString("en-US", options);

   
};

exports.getDay = getDay;

function getDay() {
     const today = new Date();
     const currentDay = today.getDay();
     
     let options = {
          weekday: "long",
     };
     
     return today.toLocaleDateString("en-US", options);

     
};


