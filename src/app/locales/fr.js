(function() {
  var translations = {
    'new_map': 'Nouvelle carte',
    'layer_type_not_supported': 'Type de couche non supporté',
    'projection_not_supported': 'Projection non supportée',
    'notifications_tab': 'Notifications',
    'no_notifications': 'Aucune notification',
    'map_layers': 'Couches',
    'add_layer_btn': 'Ajouter une couche',
    'add_layers': 'Ajout de couches',
    'remove_layer': 'Supprimer une couche',
    'attributes': 'Attributs',
    'local_geoserver': 'Geoserver local',
    'filter_layers': 'Filtrer les couches',
    'add_new_server': 'Nouveau serveur',
    'add_server': 'Ajouter un serveur',
    'server_type': 'Type',
    'server_name': 'Nom',
    'server_url': 'URL',
    'close_btn': 'Fermer',
    'add_btn': 'Ajouter',
    'merge_results': 'Fusionner les résultats',
    'cancel_btn': 'Annuler',
    'done_btn': 'Terminé',
    'remove_btn': 'Supprimer',
    'conflict': 'CONFLIT',
    'synchronization': 'Synchronisation',
    'synchronization_failed': 'An unknown error occurred when synchronizing.  Please try again.',
    'synchronization_success': 'The repositories have been synchronized.',
    'add_sync': 'Add Sync',
    'merge': 'Merge',
    'config': 'Remote Config',
    'repo': 'Repo',
    'remote': 'Remote',
    'new_remote': 'New Remote',
    'add_remote': 'Add Remote',
    'repo_name': 'Repo Name',
    'repo_uuid': 'Repo UUID',
    'remote_name': 'Remote Name',
    'edit_btn': 'Edit',
    'repo_url': 'URL',
    'repo_username': 'Identifiant',
    'repo_password': 'Mot de passe',
    'toggle_menu': 'Afficher / Masquer le menu',
    'single': 'Single',
    'continuous': 'Continuous',
    'into': 'into',
    'error': 'Error',
    'warning': 'Warning',
    'failed_get_capabilities': 'Failed to get capabilities: ',
    'server_url_not_specified': 'Server url is not specified',
    'fixed': 'FIXED',
    'adds': 'Adds',
    'modifications': 'Modifications',
    'deletes': 'Suppressions',
    'merges': 'Fusions',
    'cancel_merge': 'Annuler la fusion',
    'complete_merge': 'Achever la fusion',
    'save_btn': 'Enregistrer',
    'save_copy_btn': 'Enregistrer une copie',
    'single_conflict': '1 conflit restant',
    'multiple_conflicts': '{{value}} conflits restants',
    'sure_cancel_merge': 'Confirmez-vous l\'annualion de la fusion ?',
    'sure_commit_merge': 'Voulez vous terminer et publier la fusion ?',
    'commit_merge': 'Publier la fusion',
    'added_1_feature': 'Un objet ajouté à \'{{layer}}\' par MapLoom.',
    'modified_1_feature': 'Un objet modifié dans \'{{layer}}\' par MapLoom.',
    'modified_x_features': 'Modified {{num}} features in \'{{layer}}\' par MapLoom.',
    'removed_1_feature': 'Removed 1 feature from \'{{layer}}\' par MapLoom.',
    'applied_via_maploom': 'Applied via MapLoom.',
    'conflicts_in': 'Conflicts resolved in \'{{layer}}\'',
    'merged_branch': 'Merged branch \'{{branch}}\'',
    'yes_btn': 'Oui',
    'no_btn': 'Non',
    'differences': 'Différences',
    'from': 'de',
    'to': 'à',
    'new_feature': 'Nouvel objet',
    'changed_feature': 'Objet modifié',
    'original_feature': 'Objet original',
    'removed_feature': 'Objet supprimé',
    'merged_feature': 'Objet fusionné',
    'location_lon_lat': 'Localisation ( lon, lat )',
    'show_history': 'Show History',
    'show_table': 'Show Table',
    'show_table_failed': 'An unknown error occurred when retrieving the features. Please try again.',
    'show_heatmap': 'Show Heatmap',
    'show_pics': 'Show Photos',
    'edit_geometry': 'Editer la géometrie',
    'edit_attributes': 'Editer les attributs',
    'delete_feature': 'Supprimer un objet',
    'feature_diff_error': 'Unable to retrieve all the differences for the feature. ' +
        'Check network connection and try again.',
    'no_local_branches': 'Repository had no local branches.',
    'unable_to_get_branches': 'Unable to get the repository\'s branches. Try re-adding the layer.',
    'unable_to_get_remotes': 'Unable to get the repository\'s remotes. Try re-adding the layer.',
    'unable_to_get_datastore': 'Unable to get the datastore.',
    'unable_to_add_remote': 'Unable to add the GeoGig remote: ',
    'unable_to_get_feature_type': 'Unable to get feature type of data store.',
    'unable_to_get_datastore_name': 'Unable to determine the data store name.',
    'layer_was_layer_group': 'Unable to determine if the layer was a layer group.',
    'start_date': 'Start Date:',
    'end_date': 'End Date:',
    'summarize_btn': 'Summarize',
    'anonymous': 'Anonymous',
    'history_failed': 'Failed to fetch the history of the layer. Please try again.',
    'history': 'History',
    'btn_ok': 'OK',
    'summary_of_changes': 'Summary of Changes',
    'too_many_changes': 'There were too many changes to display. If possible, narrow the range.',
    'too_many_changes_refresh': 'Over {{value}} changes were made to the layer.  Check the history for a detailed log.',
    'no_changes_in_time_range': 'No changes were made to the layer in the specified time frame.',
    'no_changes_in_commit': 'No changes were made to the layer in the specified commit.',
    'diff_unknown_error': 'An unknown error occurred while summarizing the differences.  Please try again.',
    'in_lower_case': 'in',
    'to_lower_case': 'to',
    'from_lower_case': 'from',
    'history_for': 'History for {{value}}',
    'drag_zoom_not_supported': 'Drag zoom interaction is not supported on this map.',
    'repository': 'Repository',
    'transaction': 'Transaction',
    'abort': 'Abort',
    'resolve_conflicts': 'Resolve Conflicts',
    'merge_conflicts': 'Merge Conflicts',
    'conflicts_encountered': 'Some conflicts were encountered when performing the operation,' +
        ' would you like to resolve these or abort the merge?',
    'conflict_unknown_error': 'An unknown error occurred when finalizing the transaction.  Please try again.',
    'unable_to_resolve_conflicts': 'Unable to resolve {{value}} conflicts.  Please try again.',
    'merge_unknown_error': 'An unknown error occurred when performing the merge.  Please try again.',
    'merge_successful': 'Merge Successful',
    'merge_no_changes': 'The merge resulted in no changes.',
    'select_date_range': 'Select Date Range',
    'select_start_time': 'Select Start Time',
    'link': 'Lien',
    'link_already_exists': 'Le lien existes déjà.',
    'synchronize': 'Synchroniser',
    'no_email': 'Pas d\'email',
    'added': 'Ajouté',
    'removed': 'Supprimé',
    'modified': 'Modifié',
    'feature': 'objet',
    'features': 'objets',
    'conflicted_features_resolved': 'Conflicted features resolved: ',
    'id': 'ID',
    'author_name': 'Nom de l\'auteur',
    'author_email': 'Email de l\'auteur',
    'committer_name': 'Nom du committer',
    'committer_email': 'Email du committer',
    'commit_time': 'Heure du commit',
    'message': 'Message',
    'export_csv': 'Export CSV',
    'sure_delete_feature': 'Confirmez-vous la suppression de l\'objet ?',
    'drawing_geometry': 'Dessin de la géometrie',
    'adding_feature': 'Ajout de l\'objet',
    'must_create_feature': 'Vous devez créer un objet avant de continuer.',
    'editing_geometry': 'Edition de la géometrie',
    'save_attributes': 'Sauver les attributs',
    'invalid_fields': 'Il y a {{value}} champs invalides, vous devez corriger ces problèmes avant de pouvoir sauvegarder.',
    'add_feature': 'Ajouter un objet',
    'toggle_visibility': 'Afficher / Masquer',
    'remote_options': 'Remote Options',
    'history_summary': 'History Summary',
    'zoom_world': 'Vue Globale',
    'legend_title': 'Légende',
    'toggle_legend': 'Afficher / Masquer la légende',
    'refresh_layers': 'Rafraichir les couches',
    'sure_remove_layer': 'Confirmez vous la suppression de cette couche ?',
    'pull_unknown_error': 'An unknown error occurred when pulling from the remote.  Please try again.',
    'pull_multiple_error': 'Pull has failed multiple times, perhaps the remote is not available at the moment.' +
        ' Please try again later.',
    'pull_timeout_error': 'Pull is taking longer than normal, this could be caused by the server being overloaded so' +
        ' in an effort to let the server catch up we are stopping auto-sync. Please wait before resuming auto-sync so' +
        ' the server can catch up.',
    'local': 'Local',
    'pull_conflicts': 'Pull Conflicts',
    'feature_id': 'Feature ID',
    'table_view': 'Table View',
    'filter_table': 'Filtrer',
    'clear_table_filter': 'Clear',
    'word_wrap': 'Toggle Word Wrap',
    'go_to_map': 'Voir sur la carte',
    'title': 'Titre',
    'abstract': 'Résumé',
    'save_this_map': 'Sauver cette carte',
    'save_failed': 'Sauvegarde écouchée',
    'map_save_failed': 'Map save failed with the following status: {{value}}.',
    'map_save_permission': 'Vous n\'avez pas les droits pour éditer cette carte.  Vous devriez sauvegarder une copie si ' +
        'vous souhaitez conserver vos changements.',
    'fetch': 'Fetch',
    'fetch_error': 'There was an error trying to fetch from the remote, please try again later.',
    'fetch_timeout': 'Fetch is taking longer than it should, its possible that it is still working so' +
        ' wait a moment before trying again.',
    'repo_not_compatible': 'The specifed repository is not a compatible remote with your repository.',
    'not_a_repo': 'The specified endpoint isn\'t a repository.',
    'could_not_connect': 'Failed to connect to the specified endpoint.',
    'remote_add_success': '{{value}} was successfully added.',
    'remote_edit_success': '{{value}} was successfully changed.',
    'remote_remove': 'Are you sure you want to remove this remote?',
    'no_compatible_repos': 'There were no compatible repositories found at the given url.',
    'continue_btn': 'Continue',
    'remote_already_exists': 'The specified remote already exists on this repo.',
    'remote_add_error': 'There was an error trying to add your remote.',
    'remote_edit_error': 'There was an error trying to edit your remote.',
    'multiple_compatible_repos': 'There were multiple compatible repositories found. Please choose the one you wish' +
        ' to use.',
    'undo_changes': 'Undo Changes',
    'newer_feature_version': 'This feature has been modified since this notification was posted.' +
        '  Would you like to compare with the newest version?',
    'undo_successful': 'Undo Successful',
    'undo_no_changes': 'The merge resulted in no changes.',
    'sure_undo_changes': 'Are you sure you want to undo the changes introduced in this commit? ' +
        '(Note: The change will still be a part of the feature\'s history.)',
    'fixed_feature': 'Fixed Feature',
    'undo_conflicts': 'Undo Conflicts',
    'changes_undone': 'The changes to the feature have been successfully undone.',
    'reverted_changes_to_feature': 'Reverted changes made to {{feature}}.',
    'remote_not_fetched': 'It would appear as though the remote you selected has not' +
        ' been fetched from. We will now attempt to fetch the data you need to create links.',
    'latlon_confirm': '{{value}} is the interpreted value of your coordinates. Is this correct?',
    'degree_minute_second': 'Degrés Minutes Secondes',
    'decimal_degrees': 'Degrés décimaux',
    'mgrs': 'MGRS',
    'other': 'Other',
    'search': 'Search',
    'search_locations': 'Rechercher un lieu',
    'search_table': 'Search All Fields',
    'search_results': 'Search Results',
    'search_no_results': 'No results matched the search query.',
    'search_error_status': 'Search failed with response code ({{status}}).',
    'search_error': 'An unknown error occurred while performing the search.',
    'switch_coords': 'Switch Coordinate Display',
    'accept_feature': 'Valider l\'objet',
    'cancel_feature': 'Annuler l\'objet',
    'add_to_feature': 'Ajouter nouveau',
    'remove_from_feature': 'Supprimer la sélection',
    'geometry_to': 'Geometry to',
    'draw': 'Dessin',
    'zoom_to_data': 'Zoomer sur la donnée',
    'show_layer_info': 'Voir les informations',
    'show_attribute_visibility_info': 'Show Attribute Visibility',
    'workspace': 'Espace de travail',
    'featuretype': 'FeatureType',
    'keywords': 'Mots-clés',
    'srs': 'SRS',
    'server': 'Server',
    'credentials': 'Credentials',
    'enter_credentials': 'Please enter your credentials for:',
    'skip_credentials': 'Or you may click Skip to log in anonymously. Only public layer will be visible to anonymous ' +
        'users and changes to those layers will not be associated with a user. It is recommended that you log in if ' +
        'you have credentials for this server.',
    'skip': 'Passer',
    'connected_as': 'Connected as {{value}}.',
    'connect_as': 'Connect as...',
    'branch': 'Branch',
    'layerinfo': 'Layer Info',
    'layerattributevisibility': 'Layer Attribute Visibility',
    'author_fetch_failed': 'An unknown error occured while determining the authors of the feature.',
    'show_authors': 'Show Authors',
    'right_angles': 'Angles droits',
    'right_angles_failed': 'We weren\'t able to fix your polygon, try to get it closer to a' +
        ' rectangle and try again.',
    'unable_to_save_feature': 'Failed to save the new feature for the following reason: {{value}}',
    'unknown_error': 'An unknown error occurred while saving the feature.',
    'unable_to_save_geometry': 'Echec de la sauvegarde des changements sur la géométrie pour la raison suivante : {{value}}',
    'unable_to_save_attributes': 'Echec de la sauvegarde des changements sur les atrributs pour la raison suivante : {{value}}',
    'unable_to_delete_feature': 'Echec de la suppression de l\'objet pour la raison suivante : {{value}}',
    'load_server_failed': 'Failed to load the server {{server}} for the following reason: {{value}}',
    'remove_server': 'Are you sure you want to remove this server?',
    'remove_layers_first': 'This server has layers that are on the map, please remove them from the map first.',
    'edit_server': 'Are you sure you want to edit this server?',
    'load_layer_failed': 'Failed to load the layer {{layer}}, this layer will not be added to the map and if you' +
        ' save your map it will not have this layer.',
    'no_attributes': 'There are no attributes to display.',
    'true': 'Vrai',
    'false': 'Faux',
    'failed_to_add_server': 'There was a problem trying to connect to the server you specified, check the url and' +
        ' credentials to make sure they are correct before trying again.',
    'failed_to_save_features': 'The features failed to save, please try to save again before closing' +
        ' the table or you will lose work.',
    'server_connect_failed': 'We were unable to connect to this server, would still like to add this server?',
    'disabled_layer': 'Layer is Disabled',
    'missing_layers_merge': 'There are {{count}} feature(s) involved in the merge that are not part of the map.  ' +
        'In order to get the most accurate schema information for that layer, it is recommended that you cancel the ' +
        'merge, add the missing layers, and try again. Missing layer(s): ',
    'advanced_filters': 'Advanced Filters',
    'basic_filters': 'Basic Filters',
    'apply_filters': 'Apply Filters',
    'clear_filters': 'Clear Filters',
    'previous_page': 'Previous Page',
    'next_page': 'Next Page',
    'current_page': 'Page {{currentPage}} of {{totalPages}}',
    'filter': 'Filter by Attribute:',
    'merge_commit': 'Merge Commit',
    'always_anonymous': 'Always Log On Anonymously',
    'script_error': 'The following script error has occurred: "{{error}}".  It is recommended that you reload the ' +
        'web page to resolve any potential complications.',
    'show_changes': 'Show Changes',
    'sure_close_table': 'Are you sure you want to close the table?  Any unsaved changes will be lost.',
    'toggle_fullscreen': 'Plein écran',
    'since_time': 'Running since {{time}}',
    'unread_notifications': 'Unread Notifications',
    'generate_notification': 'Generate Notification',
    'no_layers_notification': 'Generating a notification requires a GeoGig layer to function.  ' +
        'Please add a GeoGig layer to the map.',
    'single_sync': 'Perform Synchronization',
    'continuous_sync': 'Toggle Auto-Synchronization',
    'statistics_view': 'Voir Statistiques',
    'exact_match': 'Correspondance Exacte',
    'range': 'Range',
    'contains': 'Contient',
    'minimum': 'Minimum',
    'maximum': 'Maximum',
    'mean': 'Mean',
    'median': 'Median',
    'sum': 'Sum',
    'variance': 'Variance',
    'standard_deviation': 'Standard Deviation',
    'count': 'Count',
    'populated_count': 'Populated Count',
    'unique_values': 'Valeurs uniques',
    'fetch_layers_from_server': 'Fetch Layers from Server',
    'set_spatial_filter': 'Utiliser cet objet dans un filtre spatial',
    'spatial_filter': 'Filtre spatial'
  };

  var module = angular.module('loom_translations_fr', ['pascalprecht.translate']);

  module.config(function($translateProvider) {
    $translateProvider.translations('fr', translations);
  });

}());
