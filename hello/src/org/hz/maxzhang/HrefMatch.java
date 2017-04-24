package org.hz.maxzhang;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

/**
 * Created by Administrator on 2017/4/23.
 */
public class HrefMatch {
    public static void main(String[] args){
        try{
            String urlString;
            urlString = "http://java.sun.com";
            InputStreamReader in =new InputStreamReader(new URL(urlString).openStream());

            StringBuilder input =new StringBuilder();
            int ch;
            while((ch = in.read()) != -1){
                input.append((char)ch);
            }

            String patternString = "<a\\s+href\\s*(\"[^\"]*\"|[^\\s>]*)\\s*>";
            Pattern pattern = Pattern.compile(patternString, Pattern.CASE_INSENSITIVE);
            Matcher matcher = pattern.matcher(input);

            while(matcher.find()){
                int start = matcher.start();
                int end = matcher.end();
                String match = input.substring(start, end);
                System.out.println(match);
            }

        }catch (IOException e){
            e.printStackTrace();
        }catch (PatternSyntaxException e){
            e.printStackTrace();
        }
    }
}
