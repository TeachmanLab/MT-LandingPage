# A simple script for turning this html content into a war file.
# We have the ability to deploy war files, and I don't want to
# complicate the deployment process by adding Apache to our server,
# thus this little complication.  Just run this, and take the generated
# war file, and place it on the server.

rm -rf war
mkdir war
cp index.html war
cp favicon.ico war
cp -r WEB-INF war
cp -r img war
cp -r css war
cp -r vendor war
cd war
zip -r landing.war *
mv landing.war ..
cd ..
rm -rf war