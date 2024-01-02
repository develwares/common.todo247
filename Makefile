clean:
	find . -mindepth 1 -maxdepth 1 -type f ! -name 'Makefile' -delete; \
    find . -mindepth 1 -maxdepth 1 -type d ! -name '.git' -exec rm -rf {} +

cp:
	find . -mindepth 1 -maxdepth 1 -type f ! -name 'Makefile' -delete; \
    find . -mindepth 1 -maxdepth 1 -type d ! -name '.git' -exec rm -rf {} + \
	&& cp -r ./../libraries.todo247/common/dist/* .;

push:
	git add . && git commit -m "$c" && git push;
