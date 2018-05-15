function plural(name) {

    if (name.endsWith('y')) {
        throw 'words ending with y not implemented';
    }

    return name + 's';
}