{
  var Sql = {
    listToString: function(x, xs) {
      return [x].concat(xs).join("");
    }
  };
}

start
  = sentence

sentence
  = orSentence

orSentence
  = lhs:andSentence __ 'OR' __ rhs:orSentence { return { operation: 'OR', between: [lhs, rhs] }; }
  / andSentence

andSentence
  = lhs:primarySentence __ 'AND' __ rhs:andSentence { return { operation: 'AND', between: [lhs, rhs] }; }
  / primarySentence

primarySentence
  = '(' _ sentence:sentence _ ')' { return sentence; }
  / LogicExpr
  
identifier "identifier"
  = x:identStart xs:identRest* {
    return Sql.listToString(x, xs);
  }

identStart
  = [a-z_]i

identRest
  = [a-z0-9_]i
  
  
 operator
  = "<>"       { return "Different"; }
  / "="        { return "Equal";     }
  / ">"        { return "Greater";     }
  / "<"        { return "Less";     }
  / ">="        { return "Greater or Equal";     }
  / "<="        { return "Less or Equal";     }
  
 LogicExpr
  = left:Expr _ op:operator _ right:Expr {
    return {
      left: left,
      op: op,
      right: right
    };
  }

  
  
  
 Expr
  = Float
  / Integer
  / identifier
  / String

Integer "integer"
  = n:[0-9]+ {
    return parseInt(n.join(""));
  }

Float "float"
  = left:Integer "." right:Integer {
    return parseFloat([
      left.toString(),
      right.toString()
    ].join("."));
  }

String "string"
  = "'" str:ValidStringChar* "'" {
    return str.join("");
  }

ValidStringChar
  = !"'" c:. {
    return c;
  }

_ "optionalWhiteSpace"
  = whiteSpace *

__ "mandatoryWhiteSpace"
  = whiteSpace +

whiteSpace
  = [ \t\n\r]+