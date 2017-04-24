package org.hz.maxzhang;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

/**
 * Created by Administrator on 2017/4/23.
 */
public class RegexTest {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.println("Enter pattern: ");
        String patternString = in.nextLine();
        patternString ="((1?[0-9]):([0-5][0-9]))[a|p]m";

        Pattern pattern = null;
        try{
            pattern = Pattern.compile(patternString);
        }catch (PatternSyntaxException e){
            System.out.println("Pattern syntax error");
                    System.exit(1);
        }

        while(true){
            System.out.println("Enter string to match: ");
            String input = in.nextLine();
            if(input == null || input.equals("")){
                return ;
            }
            Matcher matcher = pattern.matcher(input);
  /*          while(matcher.find()){
                String match= input.substring(matcher.start(), matcher.end());
            }*/

            if(matcher.matches()){
                System.out.println("Match");
                int g = matcher.groupCount();
                if(g>0){
                    for(int i=0; i<input.length(); i++){
                        for(int j=1; j<=g;j++){
                            if( i == matcher.start(j)){
                                System.out.print('(');
                            }
                            System.out.print(input.charAt(i));
                            for(j=1;j<=g;j++){
                                if(i+1 == matcher.end(j)){
                                    System.out.print(')');
                                }
                            }
                        }
                    }
                    System.out.println();
                }
            }else{
                System.out.println("No match");
            }
        }



    }
}
