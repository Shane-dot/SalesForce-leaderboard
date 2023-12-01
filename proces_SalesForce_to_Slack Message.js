// Current date
const currentDate = new Date();

// Yesterday
const yesterday = new Date(currentDate);
yesterday.setDate(yesterday.getDate() - 1);

// One week ago
const oneWeekAgo = new Date(currentDate);
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

// 28 days ago 
const twentyEightDaysAgo = new Date(currentDate);
twentyEightDaysAgo.setDate(twentyEightDaysAgo.getDate() - 28);

// 30 days ago
const thirtyDaysAgo = new Date(currentDate);
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

//beginning of month 
const beginningOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
console.log(beginningOfMonth.toString())


//get SF data 
let SQLsRevClosedYes = 0
let SQlsMTDRevClosed = 0


// xxxx
let reps_name = {}

closeddeals.data.forEach( x=> {
 let closedate = new Date(x.CloseDate)
 
  if(closedate >= yesterday) {
    SQLsRevClosedYes += x.ARR__c
  }
  
  if(closedate >= beginningOfMonth){
    SQlsMTDRevClosed += x.ARR__c
    if (x.Owner.Name in reps_name) {
      reps_name[x.Owner.Name] = reps_name[x.Owner.Name] + x.ARR__c
    }
    else {
      reps_name[x.Owner.Name] = x.ARR__c
    }
  } 
})

//sort for leaderboard
const orderedleaderboard = Object.entries(reps_name);

orderedleaderboard.sort((a, b) => b[1] - a[1]);

const sortedLeaderboard =  Object.fromEntries(orderedleaderboard);


let leaderboardmes = ''
for (rep in sortedLeaderboard) {
  let row = "  •  " + rep + ": $" + reps_name[rep].toLocaleString() + "\n"
  leaderboardmes = leaderboardmes + row
}



const message2 = "*Daily Sales Leaderboard for the Month:*\n"
+ leaderboardmes + "\n"

return message2

