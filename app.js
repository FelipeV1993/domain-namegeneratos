var domainName = [];
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var finish = [".com", ".cl", ".jp"];

for (var i = 0; i < pronoun.length; i++) {
  for (var u = 0; u < adj.length; u++) {
    for (var y = 0; y < noun.length; y++) {
      for (var t = 0; t < finish.length; t++) {
        domainName.push(pronoun[i] + adj[u] + noun[y] + finish[t]);
      }
    }
  }
}

console.log(domainName);
